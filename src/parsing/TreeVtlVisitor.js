import { VtlVisitor } from './antlr';

function TreeVtlVisitor(getContext) {
  VtlVisitor.call(this);
  this.getContext = getContext;
  return this;
}

TreeVtlVisitor.prototype = Object.create(VtlVisitor.prototype);
TreeVtlVisitor.prototype.constructor = TreeVtlVisitor;

VtlVisitor.prototype.visitStart = function(ctx) {
  this.getContext(ctx);
};

export default TreeVtlVisitor;
