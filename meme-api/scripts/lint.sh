#!/usr/bin/env bash

set -x
set -e

mypy app --pretty --show-error-context
black app --check
isort --check-only app
flake8
