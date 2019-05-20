export const buildTree = ctx => ({
  name: `${ctx.getText()} (${ctx.constructor.name})`,
  children: ctx.children ? ctx.children.map(c => buildTree(c)) : null,
});
