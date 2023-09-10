#!/usr/bin/env bash
# scripts/setenv.sh

# Export test env vars
export $(grep -v '^#' .env.test | xargs)
