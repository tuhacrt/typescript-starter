if (!process.env.CI) {
  const { spawnSync } = require('child_process')
  const r = spawnSync('lefthook', ['install'], { stdio: 'inherit' })

  process.exit(r.status ?? 0)
}
