new Vue({
    el: "#app",

    data: {
        girilenDeger: '',
        notlar: ['Örnek 1', 'Örnek 2', 'Örnek 3', 'Örnek 4' ,'Örnek 5']
    },
    methods: {
        listeyeEkle() {
            if (this.girilenDeger !== ""){
            this.notlar.push(this.girilenDeger);
        }
            this.girilenDeger = '';
        },
        removeElement (not) {
        this.notlar.splice(this.notlar.indexOf(not), 1);
       }
    }
});
