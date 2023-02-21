import { Matrix4 } from "../core/Matrix4";
import { Mesh } from '../objects/Mesh'
import { Face3 } from '../core/Face3'
import { Face4 } from '../core/Face4'
import { Particle } from '../objects/Particle'
import { RenderableFace3 } from '../renders/renderables/RenderableFace3'
import { RenderableFace4 } from '../renders/renderables/RenderableFace4'
import { RenderableParticle } from '../renders/renderables/RenderableParticle'

class Renderer {
  constructor() {
    this.renderList = [];
    this.face3Pool = [];
    this.face4Pool = [];
    this.particlePool = [];
    this.matrix = new Matrix4();
  }

  sort(a, b) {
    return a.screenZ - b.screenZ;
  }

  project(scene, camera) {
    this.renderList = [];

    // scene.objects.map(v => this.renderList.push(v))

    let i, j, vertex, face, object, v1, v2, v3, v4,
		face3count = 0, face4count = 0, particleCount = 0,
		camerafocus = camera.focus, focuszoom = camera.focus * camera.zoom,
		verticesLength = 0, facesLength = 0;

    scene.objects.map(object => {

      if (object instanceof Mesh) {
        this.matrix.multiply(camera.matrix, object.matrix);

        // vertices
        verticesLength = object.geometry.vertices.length;

        for (j = 0; j < verticesLength; j++) {
				
					vertex = object.geometry.vertices[j];

					vertex.screen.copy(vertex.position);

					this.matrix.transform(vertex.screen);

					vertex.screen.z = focuszoom / (camerafocus + vertex.screen.z);

					vertex.visible = vertex.screen.z > 0;					

					vertex.screen.x *= vertex.screen.z;
					vertex.screen.y *= vertex.screen.z; 
				}

        // faces
        facesLength = object.geometry.faces.length;
        for (j = 0; j < facesLength; j++) {
          face = object.geometry.faces[j];

          if (face instanceof Face3) {
            v1 = object.geometry.vertices[face.a];
						v2 = object.geometry.vertices[face.b];
						v3 = object.geometry.vertices[face.c];

            if (v1.visible && v2.visible && v3.visible && (object.doubleSided ||
              (v3.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) -
              (v3.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0) ) {
              
             face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z) * 0.3;
             
             if (this.face3Pool[face3count] == null) {
              this.face3Pool[face3count] = new RenderableFace3();
             }
  
             this.face3Pool[face3count].v1.x = v1.screen.x;
             this.face3Pool[face3count].v1.y = v1.screen.y;
             this.face3Pool[face3count].v2.x = v2.screen.x;
             this.face3Pool[face3count].v2.y = v2.screen.y;
             this.face3Pool[face3count].v3.x = v3.screen.x;
             this.face3Pool[face3count].v3.y = v3.screen.y;
             this.face3Pool[face3count].screenZ = face.screen.z;
             
             this.face3Pool[face3count].color = face.color;
             this.face3Pool[face3count].material = object.material;
  
             this.renderList.push(this.face3Pool[face3count]);
  
             face3count++;
           }

          } else if(face instanceof Face4) {

            v1 = object.geometry.vertices[face.a];
						v2 = object.geometry.vertices[face.b];
						v3 = object.geometry.vertices[face.c];
						v4 = object.geometry.vertices[face.d];

            if (v1.visible && v2.visible && v3.visible && v4.visible && (object.doubleSided ||
              ((v4.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) -
              (v4.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0 ||
              (v2.screen.x - v3.screen.x) * (v4.screen.y - v3.screen.y) -
              (v2.screen.y - v3.screen.y) * (v4.screen.x - v3.screen.x) > 0)) ) {
              
             face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z + v4.screen.z) * 0.25;

             if (this.face4Pool[face4count] == null) {
              this.face4Pool[face4count] = new RenderableFace4();
             }

             this.face4Pool[face4count].v1.x = v1.screen.x;
             this.face4Pool[face4count].v1.y = v1.screen.y;
             this.face4Pool[face4count].v2.x = v2.screen.x;
             this.face4Pool[face4count].v2.y = v2.screen.y;
             this.face4Pool[face4count].v3.x = v3.screen.x;
             this.face4Pool[face4count].v3.y = v3.screen.y;
             this.face4Pool[face4count].v4.x = v4.screen.x;
             this.face4Pool[face4count].v4.y = v4.screen.y;
             this.face4Pool[face4count].screenZ = face.screen.z;

             this.face4Pool[face4count].color = face.color;
             this.face4Pool[face4count].material = object.material;

             this.renderList.push(this.face4Pool[face4count]);

             face4count++;
           }

          }
        }
      } else if (object instanceof Particle) {
        object.screen.copy(object.position);
				
				camera.matrix.transform(object.screen);
				
				object.screen.z = focuszoom / (camerafocus + object.screen.z);

        if (object.screen.z > 0) {
          object.screen.x *= object.screen.z;
          object.screen.y *= object.screen.z;

          if (this.particlePool[particleCount] == null) {
            this.particlePool[particleCount] = new RenderableParticle();
          }
          this.particlePool[particleCount].x = object.screen.x;
          this.particlePool[particleCount].y = object.screen.y;
          this.particlePool[particleCount].screenZ = object.screen.z;

          this.particlePool[particleCount].size = object.size;				
          this. particlePool[particleCount].material = object.material;
          this.particlePool[particleCount].color = object.color;
          this.renderList.push( this.particlePool[particleCount] );
          particleCount++;
        }

      }
    });

    this.renderList.sort(this.sort);
  }
}

export { Renderer };