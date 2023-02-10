var Concesionaria = /** @class */ (function () {
    function Concesionaria(paramAuto, paramMoto, paramCamioneta) {
        this.auto = paramAuto;
        this.moto = paramMoto;
        this.camioneta = paramCamioneta;
    }
    Concesionaria.prototype.getAuto = function () {
        return this.auto;
    };
    Concesionaria.prototype.setAuto = function (paramAuto) {
        this.auto = paramAuto;
    };
    Concesionaria.prototype.getMoto = function () {
        return this.moto;
    };
    Concesionaria.prototype.setMoto = function (paramMoto) {
        this.moto = paramMoto;
    };
    Concesionaria.prototype.getCamioneta = function () {
        return this.camioneta;
    };
    Concesionaria.prototype.setCamioneta = function (paramCamioneta) {
        this.camioneta = paramCamioneta;
    };
    return Concesionaria;
}());
var concesionaria = new Concesionaria("ford", "honda", "hilux");
console.table(concesionaria);
