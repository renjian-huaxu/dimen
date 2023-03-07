import { Vector3 } from "./Vector3";
import { Face4 } from "./Face4";

class Geometry {
  constructor() {
    this.vertices = [];
    this.faces = [];
    this.uvs = [];
  }

  computeNormals() {
    let vA, vB, vC, cb, ab, normal;

    this.vertices.map(v => v.normal.set(0, 0, 0))

    this.faces.map(face => {
      vA = this.vertices[ face.a ];
			vB = this.vertices[ face.b ];
			vC = this.vertices[ face.c ];

      cb = new Vector3();
			ab = new Vector3();
			normal = new Vector3();

			cb.sub(vC.position, vB.position);
			ab.sub(vA.position, vB.position);
			cb.cross(ab);

      if ( !cb.isZero() ) {
				cb.normalize();
			}

      face.normal = cb;

			vA.normal.addSelf( normal );
			vB.normal.addSelf( normal );
			vC.normal.addSelf( normal );

      if ( face instanceof Face4 ) {
				this.vertices[ face.d ].normal.addSelf( normal );
			}

    })
  }
}

export { Geometry }