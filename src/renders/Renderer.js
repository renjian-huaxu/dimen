class Renderer {

  renderList = [];

  project(scene) {
    scene.objects.map(v => this.renderList.push(v))
  }

}

export { Renderer };