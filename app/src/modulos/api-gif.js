"use strict";
import ajax from "./ajax";
var _KEY_FAVORITO = "videos-favoritos";
var _QUANTIDADE_PAGINACAO = 6;

var apiGif = {

    salvarListFavorito: function(list) {
        window.localStorage.setItem(_KEY_FAVORITO, JSON.stringify(list));
    },

    getListFavorito: function() {
        var str = window.localStorage.getItem(_KEY_FAVORITO) || "[]";
        return JSON.parse(str);
    },

    addFavorito: function(item) {
        var listFav = this.getListFavorito();
        //simular  async
        return new Promise(function(resolve, reject) {
            listFav.push(item);
            try {
                this.salvarListFavorito(listFav);
            } catch(e) {
                reject(e);
                return;
            }
            resolve(listFav);
        }.bind(this));
    },

    isFavorito: function(id) {
        var listFav = this.getListFavorito();
        return this.getIndiceFavorito(listFav, id) >= 0;
    },

    getIndiceFavorito: function(listFav, id) {
        for(var i = 0; i < listFav.length; i++) {
            if(listFav[i].id === id) {
                return i;
            }
        }
        return -1;
    },

    removeFavorito: function(id) {
        var list = this.getListFavorito();
        var indice = this.getIndiceFavorito(list, id);
        return new Promise(function(resolve, reject) {
            if(indice === -1) {
                reject(new Error("favorito nao encontrado"));
                return;
            }
            list.splice(indice, 1);
            this.salvarListFavorito(list);
            resolve(list);
        }.bind(this));
    },


    getListGif: function(paginacaoIndice) {
        //para fins de exemplo aqui sempre pega o mesmo json e  depois simula uma paginacao
        //o correto já é  receber da api o json paginado
        return new Promise(function(resolve, reject) {
            ajax("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit="+_QUANTIDADE_PAGINACAO+"&offset="+(paginacaoIndice * _QUANTIDADE_PAGINACAO)).then(function(list) {
                resolve(
                    list.data
                );
            }).catch(reject);
        });
    }

};



export default apiGif;
