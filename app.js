/**
 * Aplicativo - Flex
 * @author Lucas henrique
 */


// Declaração de variaveis
let etanol, gasolina

function calcular() {
    // entarada de dados(input)
    etanol = FrmFlex.inputEtanol.value
    gasolina = FrmFlex.inputGasolina.value
    // console.log(etanol)
    // console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="img/etanol.png"

    } else {
        document.getElementById("status").src="img/gasolina.png"
    }
     return false
}