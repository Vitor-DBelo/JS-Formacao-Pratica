// Cria um objeto JavaScript chamado "student"
var student = {  
    firstName: "Jane",       // Propriedade: Nome próprio
    lastName: "Doe",         // Propriedade: Sobrenome
    age: 18,                 // Propriedade: Idade
    height: 170,             // Propriedade: Altura em cm
    fullName: function() {   // Método: Retorna o nome completo
        return this.firstName + " " + this.lastName;  
    }  
};  

// Define um novo valor para a propriedade "age"
student.age = 19;  

// Incrementa a propriedade "age" usando notação de colchetes
student[age]++;  

// Chama o método "fullName" do objeto para obter o nome completo
student.fullName();
