const helpers = {
    get_crypto_data:  function(states, specific) {
        if(specific == 0)
            specific = ''
        fetch('https://api.coincap.io/v2/assets/'+specific).then((response) => response.json())
        .then((result) => {
            states.setState({
                items: result.data
            });
        })
    },

    ucwords: function(word) {
        return word.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1){
            return $1.toUpperCase(); 
         });
    }

}

export default helpers