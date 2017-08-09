import * as words from './words';

class HomeController {
    constructor($timeout) {
        var vm = this;
        vm.words = words.words;
        vm.currentWord = [vm.words[0]];

        vm.setNewWord = setNewWord;
        
        function setNewWord() {
            vm.currentWord = [];
            for(let i = 0; i < 5; i++)
            vm.currentWord.push(getNewWord());
        }
        function getNewWord() {
            return vm.words[Math.floor(Math.random() * vm.words.length)];
        }

        var countUp = function () {
            setNewWord();
            $timeout(countUp, 50000);
        };
        $timeout(countUp, 50000);
    }
}

export default HomeController;
