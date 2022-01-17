


function trans_Tex() {
    // SIZE
    let inputsize = document.getElementById('size');
    let outputsize;
    for(let i=0;i<sizer.length;i++){
        if(inputsize.value==sizer[i].value){
            outputsize=sizer[i].tex;
        }
    }
    // COLOR
    let inputcolor = document.getElementById('text_color');
    let outputcolor = ` \\textcolor{${inputcolor.value}}{ `;

    // MAKE SENTENCE 
    var inputValue =  document.getElementById( "textdata" ).value;
    var text = `${outputsize}` + `${outputcolor}`   + `${inputValue}` +" } ";
    // MAKE TEX
    var html =  katex.renderToString(
        `${text}`, {throwOnError: false}
    );


    document.getElementById( "check" ).innerHTML = 'OUTPUT：　'    +html;
}


// カラーコードをrgbに変換する関数
function convert_colorcode_to_rgb(colorcode) {
    // 先頭に#が含まれている場合は除外
    if(colorcode.split('')[0] === '#') {
        colorcode = colorcode.substring(1);
    }

    // カラーコードが省略されている場合は6桁に戻す
    if(colorcode.length === 3) {
        var codeArr = colorcode.split('');
        colorcode = codeArr[0] + codeArr[0] + codeArr[1] + codeArr[1] + codeArr[2] + codeArr[2];
    }

    // カラーコードが6桁でない場合
    if(colorcode.length !== 6) {
        return false;
    }
    var r = parseInt(colorcode.substring(0, 2), 16);
    var g = parseInt(colorcode.substring(2, 4), 16);
    var b = parseInt(colorcode.substring(4, 6), 16);
    return [r, g, b];
}
