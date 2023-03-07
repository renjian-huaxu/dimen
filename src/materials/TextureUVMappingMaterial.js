class TextureUVMappingMaterial {
  constructor(bitmap) {
    this.bitmap = bitmap;
  }

  toString() {
    return 'DIMEMN.TextureUVMappingMaterial ( bitmap: ' + this.bitmap + ' )';
  }
}

export { TextureUVMappingMaterial }