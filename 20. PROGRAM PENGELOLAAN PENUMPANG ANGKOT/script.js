var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // jika angkor kosong
    if(penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }
    else{
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang){
                  // tampilkan pesan kesalahannya
                  console.log(namaPenumpang + "sudah ada di dalam angkot")
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
              
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
                
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
        // tampilkan pesan bahwa angkot kosong dan tidak mungkin ada penumpang turun
    if(penumpang.length == 0){
        console.log("Angkot masih kosong.");
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
             // jika nama penumpang sesuai
                // hapus penumpang dengan mengubah namanya menjadi undefined
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                 // kembalikan isi array & keluar dari function
                return penumpang;
            }
            else if( i == penumpang.length - 1){
                    // jika tidak ada nama yang sesuai
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " tidak ada di dalam angkot ini");
                 // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }           
}