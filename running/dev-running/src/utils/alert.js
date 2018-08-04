import Alert from 'react-s-alert'

const options = {
    html: true,
    timeout: 3000,
    effect: 'bouncyflip',
    position: 'top-right'
}

export function alertSuccess(message) {
    Alert.success('<h2>'+message+'</h2>', options)
}

export function alertError(message) {
    Alert.error('<h2>'+message+'</h2>', options)
}

export function alertWarning(message) {
    Alert.warning('<h2>'+message+'</h2>', options)
}

