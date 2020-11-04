const defaultConfig = {
  width: '88%',
  height: 530,
  path: '/static/editor.md.js/lib/', // Autoload modules mode, codemirror, marked... dependents libs path
  codeFold: true,
  saveHTMLToTextarea: true,
  searchReplace: true,
  // htmlDecode: 'style,script,iframe|on*',
  emoji: true,
  taskList: true,
  tocm: true,                  // Using [TOCM]
  tex: true,                   // 开启科学公式TeX语言支持，默认关闭
  flowChart: true,             // 开启流程图支持，默认关闭
  sequenceDiagram: true,       // 开启时序/序列图支持，默认关闭,
  imageUpload: true,
  imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
  imageUploadURL: 'examples/php/upload.php',
  onload: () => {
    // eslint-disable-next-line
    // console.log('onload', this);
  },
};
export {
  defaultConfig,
};