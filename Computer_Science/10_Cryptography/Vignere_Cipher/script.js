function encrpyt(plain,key){
    cipher = '';
    for(var i=0;i<plain.length;i++){
    var subt1=97,subt2=97;
    var ch=plain.charCodeAt(i);
    var k=key.charCodeAt(i%key.length);
    if(ch>=65 && ch<=90) subt1=65;
    if(k>=65 && k<=90) subt2=65; 
    var c=(ch-subt1+k-subt2)%26+subt1;
    if (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122) cipher = cipher + String.fromCharCode(c);
    else cipher += plain[i];
    }
    console.log(cipher)
    return cipher
}

function decrypt(cipher,key){
    plain = '';
    for(var i=0;i<cipher.length;i++){
    var subt1=97,subt2=97;
    var ch=cipher.charCodeAt(i);
    var k=key.charCodeAt(i%key.length);
    if(ch>=65 && ch<=90) subt1=65;
    if(k>=65 && k<=90) subt2=65; 
    var c=(ch-subt1+26-(k-subt2))%26+subt1;
    if (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122) plain = plain + String.fromCharCode(c);
    else plain += cipher[i];
    }
    console.log(plain)
    return plain
}
