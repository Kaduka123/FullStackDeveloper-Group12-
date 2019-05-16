import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  @Input() idReceta: number
  
  @Output() onListado: EventEmitter<number> = new EventEmitter<number>()
  

  receta: IReceta = { titulo: "", descripcion: "" }

  constructor(private dataService: DataService) { 
    //console.log("IdModificarConstructor "+this.idReceta);
    //this.dataService.obtenerReceta(this.idReceta)
  }

  ngOnInit() {
    this.receta = this.dataService.obtenerReceta(this.idReceta);
    //console.log(this.receta.descripcion,this.receta.titulo);
  }
  

  guardar(){
    //console.log("receta modifciada", this.receta);
    this.onListado.emit(2);
  }

}
