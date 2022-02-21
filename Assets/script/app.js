const App = {
    data () {
        return{
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: []

        }
    },
    methods: {
        inputChange(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue=''
        },
        removeNote(index){
            this.notes.splice(index, 1)
        }
    },
}

Vue.createApp(App).mount('#app')