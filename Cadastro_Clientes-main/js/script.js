class Cliente {
    constructor(){

        this.id = 1;

        this.arrayCliente = [];

        this.editId = null;
    }

 salvar(){
    let cliente =  this.lerDados();

   

    if(this.validaCampos(cliente)){
        if(this.editId == null){
            this.adicionar(cliente);

        }else{
            this.atualizar(this.editId, cliente);
        }
       

    }

    this.listaTabela();
    this.cancelar();
    
 }

 adicionar(cliente){
     this.arrayCliente.push(cliente);
     this.id++;

 }



 listaTabela(){
     let tbody = document.getElementById('tbody');
     tbody.innerText = '';

     for(let i = 0; i< this.arrayCliente.length; i++){
         let tr = tbody.insertRow();

         let td_id = tr.insertCell();
         let td_nome = tr.insertCell();
         let td_cpf = tr.insertCell();
         let td_idade = tr.insertCell();
         let td_endereco = tr.insertCell();
         let td_acoes = tr.insertCell();

         td_id.innerText = this.arrayCliente[i].id;
         td_nome.innerText = this.arrayCliente[i].nome;
         td_cpf.innerText = this.arrayCliente[i].cpf;
         td_idade.innerText = this.arrayCliente[i].idade;
         td_endereco.innerText = this.arrayCliente[i].endereco;

         let imgEdit = document.createElement('img');
         imgEdit.src = 'img/editar.png';
         imgEdit.setAttribute("onclick","cliente.preparaEdicao("+ JSON.stringify(this.arrayCliente[i]) +")");

        

         let imgDelete = document.createElement('img');
         imgDelete.src = 'img/delete.png';
         imgDelete.setAttribute("onclick","cliente.deletar("+ this.arrayCliente[i].id +")");

         td_acoes.appendChild(imgEdit);
         td_acoes.appendChild(imgDelete);

         console.log(this.arrayCliente);

     }
 }

 preparaEdicao(dados){

    this.editId = dados.id;

    document.getElementById('nome').value = dados.nome;
    document.getElementById('cpf').value = dados.cpf;
    document.getElementById('idade').value = dados.idade;
    document.getElementById('endereco').value = dados.endereco;

    document.getElementById('btn').innerText = 'Atualizar';

}

 atualizar(id, cliente){

    for(let i = 0; i < this.arrayCliente.length; i++){
        if(this.arrayCliente[i].id == id){
            this.arrayCliente[i].nome = cliente.nome;
            this.arrayCliente[i].cpf = cliente.cpf;
            this.arrayCliente[i].idade = cliente.idade;
            this.arrayCliente[i].endereco = cliente.endereco;
        }
        
    }

}

 lerDados(){
     let cliente ={}
     
     cliente.id = this.id;
     cliente.nome = document.getElementById('nome').value;
     cliente.cpf = document.getElementById('cpf').value;
     cliente.idade = document.getElementById('idade').value;
     cliente.endereco = document.getElementById('endereco').value;

     return cliente;

 }



 validaCampos(cliente){

    let msg = '';

     if(cliente.nome == ''){
         msg += '- Informe o nome completo do cliente \n';
     }

     if(cliente.cpf == ''){
        msg += '- Informe o cpf do cliente \n';
    }

    if(cliente.idade == ''){
        msg += '- Informe a idade do cliente \n';
    }

    if(cliente.endereco == ''){
        msg += '- Informe o endereço completo do cliente \n';
    }
    
    if(msg != ''){
        alert(msg);
        return false;

    }

    return true;

 }

cancelar(){

document.getElementById('nome').value = '';
document.getElementById('cpf').value = '';
document.getElementById('idade').value = '';
document.getElementById('endereco').value = '';

document.getElementById('btn').innerText = 'Salvar';
this.editId = null;


    
}

deletar(id){

    if(confirm('Deseja realmente deletar?')){

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayCliente.length; i++){
            if(this.arrayCliente[i] .id == id){
                this.arrayCliente.splice(i,1);
                tbody.deleteRow(i);
            }
        
        }
        console.log(this.arrayCliente);
    }


    
}

}

var cliente = new Cliente();