//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Efetuar a leitura do arquivo XML
xmlhttp.open("GET","xml/db_conteudo.xml",false);
//Enviar o arquivo para leitura
xmlhttp.send();
//Informar que o arquivo é um XML
xmlDoc = xmlhttp.responseXML;
//Organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n=x.length-1;n>=0;n--){
            document.write("<tr >" +
            "<td><img  style='padding-right:40px;' src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='350'></td>" +
            "<td><a style='text-decoration:none;' href='postagem.html?noticia="+ n +"'><h1 style='font-size:20px;'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1></a></td>" +
            "<td><p style='padding-left:40px;font-size:20px;'>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) + "...</p></td>" +
            
            "</tr>");
    }
}

function funcaoPostagem(){
    //Armazena a URL completa, ex:http://127.0.0.1/web-xml/postagem.html?noticia=0
    url = new URL(window.location.href);
    //Armazena somente o parâmetro da URL, ex: noticia=0
    parametro = url.searchParams;
    //Armazena somente o valor parâmetro da URL, ex: 0
    n = parametro.get("noticia");
   
    document.write("<tr >" +
    "<td><img  style='padding-right:40px;' src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' width='500'></td>" +
    "<td><h1 style='font-size:20px;'>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1></a></td>" +
    "<td><p style='padding-left:40px;font-size:20px;'>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "...</p></td>" +
    
    "</tr>");
}