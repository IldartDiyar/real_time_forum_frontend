export const ws = () => {
    const socket = new WebSocket('ws://localhost:8080/api/v1/web-socket');
    return socket
}