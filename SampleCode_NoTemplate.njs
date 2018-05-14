var blockList = renderOptions.blocks;
var noIndent = renderOptions.noIndent;
var needToIndent = false;
if(!noIndent){
  for (var i = 0, len = blockList.length; i < len; i++) {
    if(blockList[i].indent){
      needToIndent = true;
      break;
    }
  }
} else {
  needToIndent = !noIndent;
}
