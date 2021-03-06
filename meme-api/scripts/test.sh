#!/usr/bin/env bash

set -e
set -x

pytest --cov=app.api --cov=app.schemas --cov=app.crud --cov-report=term-missing app/tests "${@}"
