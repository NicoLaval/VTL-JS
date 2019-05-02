import { VtlVisitor } from './antlr';

function CustomVtlVisitor(handleChangeVariables) {
  VtlVisitor.call(this);
  this.variables = [];
  this.handleChangeVariables = handleChangeVariables;
  return this;
}

CustomVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
CustomVtlVisitor.prototype.constructor = CustomVtlVisitor;

CustomVtlVisitor.prototype.visitExpr = function(ctx) {
  this.visitChildren(ctx);
};

CustomVtlVisitor.prototype.visitVarID = function(ctx) {
  this.variables.push(ctx.getText());
  this.handleChangeVariables(this.variables);
  return this.visitChildren(ctx);
};

export default CustomVtlVisitor;
