$ErrorActionPreference = 'Stop'
$nodeDir = Join-Path $PSScriptRoot 'tools\node-v24.13.0-win-x64'
$env:Path = "$nodeDir;$env:Path"
& (Join-Path $nodeDir 'corepack.cmd') pnpm dev