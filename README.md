# socket-react-client

Unopinionated, lightweight React components for managing socket.io events on the client.

## Installation

1. Fork from <https://github.com/socket-react-client/socket-react-client>
2. ```npm install```

## Usage

Three components are made available, SocketProvider, SocketEmit, SocketOn.

To use these, simply import the component/components you want to your file.

``` 
import { SocketProvider, SocketEmit, SocketOn } from 'socket-react-client'; 

const Button = ({ emit }) => {
  return <button onClick={emit}>Click me</button>;
}

class App extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = { bool: false }
  }

  update() {
    this.setState({ bool: !this.state.bool });
  }

  render() {
    return (
      <div>
        <SocketEmit emit='hello' with={{ hello: 'world' }}>
          <Button />
          <Button />
        </SocketEmit>
        <SocketOn on='world' do={this.update} />
      </div>
    );
  }
}

```

### #SocketProvider
#### props: socket(Socket), [uri(String)]
- socket: The Socket object provided upon instantiation
- uri: The uri in which the socket connection is made

### #SocketEmit
#### props: emit(String), [with(any)]
- emit: The name of the event to emit
- with: The data to pass to listeners

#### child props: emit(func)
- emit: Callback to emit message 

### #SocketOn
#### props: name(String), [callback(func)]
- on: The name of the event to listen to
- do: The function to run upon receiving event

## Running in Development

```npm start``` will start a webpack developement server with pre-built starter code

## Testing

```npm test```

## Contributing

1. [Fork it!](https://github.com/socket-react-client/socket-react-client)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contributors

- [Michael Sotkin](https://github.com/msotkin)
- [Dean Edwards](https://github.com/deancode)
- [Cheng Ly](https://github.com/chengsieuly)

## License

[MIT](https://opensource.org/licenses/mit-license.php)