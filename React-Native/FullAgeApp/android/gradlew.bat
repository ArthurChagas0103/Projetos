@echo off
setlocal

set SCRIPT_DIR=%~dp0
set SCRIPT_DIR=%SCRIPT_DIR:\=/%

set APP_DIR=%SCRIPT_DIR%

set GRADLE_CMD=gradle
if defined GRADLE_USER_HOME (
  set GRADLE_CMD=%GRADLE_USER_HOME%\bin\gradle
)

call "%GRADLE_CMD%" %*