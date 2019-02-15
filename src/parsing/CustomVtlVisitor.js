import { VtlVisitor } from './antlr';

function CustomVtlVisitor(handleChangeVariables) {
  VtlVisitor.call(this);
  this.variables = [];
  this.handleChangeVariables = handleChangeVariables;
  return this;
}

CustomVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
CustomVtlVisitor.prototype.constructor = CustomVtlVisitor;

CustomVtlVisitor.prototype.visitStart = function(ctx) {
  return this.visitChildren(ctx);
};

CustomVtlVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};

CustomVtlVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};

CustomVtlVisitor.prototype.visitVarID = function(ctx) {
  this.variables.push(ctx.getText());
  this.handleChangeVariables(this.variables);
  return this.visitChildren(ctx);
};

export default CustomVtlVisitor;
