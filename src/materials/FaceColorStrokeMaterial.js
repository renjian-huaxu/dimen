class FaceColorStrokeMaterial {

  constructor(lineWidth) {
    this.lineWidth = lineWidth || 1;
  }

  toString() {
    return 'DIMEN.FaceColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ' )';
  }
}

export { FaceColorStrokeMaterial }