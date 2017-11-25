<template>
    <div class="content">
        <textarea></textarea>
    </div>
</template>

<script>
    /**
     * @author {benyuwan@gmail.com}
     * @file SimpleMDE组件
     * */
    import 'font-awesome/css/font-awesome.min.css'
    import 'simplemde/dist/simplemde.min.css'
    import SimpleMDE from 'simplemde'

    export default {
        data() {
            return {
                simplemde: ''
            }
        },
        mounted() {
            this.simplemde = new SimpleMDE({
                autoDownloadFontAwesome: false,
                placeholder: 'Talk to me, Ashen one...',
                spellChecker: false
            })
        }
    }
</script>
