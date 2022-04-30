function doSomething() {
  console.log("todo ok");
}

const doSomethingElse = (param1: number, activo: boolean): string => {
  const cosa: number = param1;
  const activo_2: boolean = activo;
  return "todo ok";
};

//doSomething();

/*true false 

||
&&
! 

verdadero AND verdadero => verdadero
falso     AND verdadero => falso
verdadero AND falso     => falso
falso     AND falso     => falso

or 

verdadero OR verdadero => verdadero
falso     OR verdadero => verdadero
verdadero OR falso     => verdadero
falso     OR falso     => falso

!true => false 
!false = true 
*/

const andExample = (): boolean => {
  const estaActivo = true;
  const esMayorDeEdad = true;
  const esEstudiante = false;

  return estaActivo && esMayorDeEdad && esEstudiante;
};

const orExample = (): boolean => {
  const estaActivo = false;
  const esMayorDeEdad = false;
  const esEstudiante = false;

  return estaActivo || !esMayorDeEdad || esEstudiante;
};
//console.log(orExample());

const notExample = !orExample();
//console.log("notExample", notExample);

/*
edad1 > edad2  
edad1 < edad2
edad == edad2
edad === edad2
5 == 3 
!=
!==
*/

const operadores = (numero_1: number, numero_2: number): boolean => {
  return numero_1 == numero_2;
};

const num = 5;
const num2 = 3;
//console.log(operadores(num, num2));

/*
if (operador/condicion){
  console.log('entro al bloque ');
}
*/

const ifExample = (numero: number): string => {
  let respuesta = "";
  if (numero == 5) {
    respuesta = "entro al bloque";
  }
  return respuesta;
};

const ifElseExample = (numero: number): string => {
  let respuesta = "";
  if (numero == 5) {
    respuesta = "entro al bloque";
  } else {
    respuesta = "entro al bloque else ";
  }
  console.log("Hola");
  return respuesta;
};

const ifElseIfExample = (numero: number): string => {
  let respuesta = "";

  if (numero == 5) {
    respuesta = "entro al primer bloque";
  } else if (numero == 2) {
    respuesta = "entro al segundo  bloque";
  } else if (numero == 3) {
    respuesta = "entro al tercer bloque";
  } else {
    respuesta = "entro al else";
  }

  return respuesta;
};
//console.log(ifElseIfExample(33));

const switchExample = (numero: number): string => {
  let respuesta = "";
  switch (numero) {
    case 5:
      respuesta = "entro al primer bloque";
      break;
    case 2:
      respuesta = "entro al segundo  bloque";
      break;
    case 3:
      respuesta = "entro al tercer bloque";
      break;
    default:
      respuesta = "entro al else";
      break;
  }
  return respuesta;
};

//console.log(switchExample(2));

// condicion ? pasa_si_verdadero : pasa_si_falso;

const ternario = 5 > 7 ? "verdadero" : 3 > 23 ? "no lo se" : "falso";
const numero = 9;
console.log(ternario);
