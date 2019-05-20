import { VtlVisitor } from './antlr';

function AdvancedVtlVisitor(handleChangeVariables) {
  VtlVisitor.call(this);
  this.variables = [];
  this.handleChangeVariables = handleChangeVariables;
  return this;
}

AdvancedVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
AdvancedVtlVisitor.prototype.constructor = AdvancedVtlVisitor;

AdvancedVtlVisitor.prototype.visitVarID = function(ctx) {
  this.variables.push(ctx.getText());
  this.handleChangeVariables(this.variables);
  return this.visitChildren(ctx);
};

export default AdvancedVtlVisitor;
