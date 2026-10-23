"""House-style check for SplytWiki articles.

Checks footnotes (every [^key] defined and every definition used), internal
links (../Article/ and ../glossary/Term/ point at existing files) and
sentence length (25 words or fewer, outside tables, headings and code).

Usage: python -I reports/check_style.py [files...]
With no files, checks every English article in _wiki/.
Exit status is 1 if any problem is found.
"""
import glob
import io
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAX_WORDS = 25


def check(path):
    text = open(path, encoding="utf-8").read()
    parts = text.split("---", 2)
    body = parts[2] if len(parts) == 3 else text
    problems = []

    if re.search(r"\[\^\s*\n", body):
        problems.append("footnote marker broken across a line break")
    used = set(re.findall(r"\[\^([\w.-]+)\](?!:)", body))
    defined = set(re.findall(r"^\[\^([\w.-]+)\]:", body, re.M))
    for k in sorted(used - defined):
        problems.append(f"undefined footnote [^{k}]")
    for k in sorted(defined - used):
        problems.append(f"unused footnote [^{k}]")

    glossary = os.sep + "glossary" + os.sep in path
    for target in set(re.findall(r"\]\((\.\./[^)#\s]+?)/?(?:#[^)]*)?\)", text)):
        rel = target[3:]
        if glossary:  # entries live one level deeper
            rel = rel[3:] if rel.startswith("../") else "glossary/" + rel
        if not os.path.exists(os.path.join(ROOT, "_wiki", rel + ".md")):
            problems.append(f"missing link target {target}/")

    prose = body.split("## References")[0]
    prose = re.sub(r"```.*?```", "", prose, flags=re.S)
    for line in prose.split("\n"):
        if line.startswith(("|", "#", "    ")):
            continue
        line = re.sub(r"\[\^[\w.-]+\]", "", line)
        line = re.sub(r"\]\([^)]*\)", "]", line)
        for sent in re.split(r'(?<=[.!?])\**\s+(?=[A-Z"*\[`])', line):
            n = len(sent.split())
            if n > MAX_WORDS:
                problems.append(f"{n}-word sentence: {sent[:100]}")
    return problems


def main():
    files = sys.argv[1:] or sorted(glob.glob(os.path.join(ROOT, "_wiki", "*.md")))
    bad = 0
    for f in files:
        probs = check(f)
        if probs:
            bad += 1
            print(f"== {os.path.relpath(f, ROOT)}")
            for p in probs:
                print("   " + p)
    print(f"{len(files)} file(s) checked, {bad} with problems")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
