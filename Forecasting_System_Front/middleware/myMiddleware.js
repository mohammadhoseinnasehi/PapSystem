export default function (ctx) {
  if (ctx.route.fullPath === '/')
    ctx.redirect('/prediction')
}