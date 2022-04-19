import React from "react";
import Chart from "chart.js";
import "./device.css";
import "./delivery.css";
import "./grid.css";

class Container extends React.Component {
  render() {
    return (
      <div className="container">{this.props.children}</div>
    );
  }
}

class Button extends React.Component {
  render() {
    const {variant = "filled", color, children, ...props} = this.props;
    return (
      <button className={`btn ${variant} ${color}`} {...props}>{children}</button>
    );
  }
}

class HorizontalScroll extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <div className="horizontal-scroll-wrapper" {...props}>{children}</div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const {children, ...props} = this.props;
    return (
      <footer className="footer" {...props}>
        <div className="social-media"></div>
        <div className="links">
          <ul>
            <li><a href="#/">Delivery Food</a></li>
            <li><a href="#/">Privacy</a></li>
            <li><a href="#/">Contact Us</a></li>
            <li><a href="#/">Help Center</a></li>
          </ul>
        </div>
        <p className="copyright">© 2020 Delivery Food - All reserved.</p>
      </footer>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <img
        src="https://res.cloudinary.com/luneswallet/image/upload/v1593651930/react-examples/avatar.jpg"
        className="avatar"
        alt="avatar"
        onClick={this.props.onClick}
      />
    );
  }
}

class Modal extends React.Component {
  render() {
    const {title, animate, onClose} = this.props;
    return (
      <Grid className={`modal ${animate}`} direction="column">
        <Grid align="center" justify="space-between" padding={2}>
          <h3>{title}</h3>
          {onClose && <small>close</small>}
        </Grid>
        {this.props.children}
      </Grid>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: ""
    };
  }

  open = () => this.setState({animate: "animate"});
  close = () => this.setState({animate: ""});

  render() {
    debugger;
    return (
      <div className="header">
        <Modal title="Profile" animate={this.state.animate} padding={2} onClose={this.close}>
          <Grid padding={2} align="center" justify="center">
            content profile
          </Grid>
        </Modal>
        <Grid>
          <Grid align="flex-start" direction="column" className="logo">
            <h3>Hello</h3>
            <p className="title">Pedro</p>
          </Grid>
          <Grid justify="flex-end">
            <img className="notification" src="https://res.cloudinary.com/luneswallet/image/upload/v1593958864/react-examples/notification.svg"
                 alt="notification"/>
            <Avatar onClick={this.open}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class Grid extends React.Component {
  render() {
    const {padding = 0, align = "center", direction = "row", justify = "center", children} = this.props;
    return (
      <div
        className={`grid padding${padding} ${this.props.className}`}
        style={{"justify-content": justify, "align-items": align, "flex-direction": direction}}
      >
        {children}
      </div>
    );
  }
}

class Account extends React.Component {
  render() {
    return (
      <div className="account">
        <Grid justify="space-between" direction="column">
          <Grid align="center" justify="space-between" padding={4}>
            <h3>Your account</h3>
            <Button color="transparent">
              <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593952388/react-examples/add.svg" alt="add"/>
              add
            </Button>
          </Grid>
          <Grid align="center" justify="space-between" padding={4}>
            <div className="card account">
              <p>$ 2,987.89</p>
              <small>+ $1,356</small>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class SectionItem extends React.Component {
  render() {
    return (
      <Grid align="center" className="section-item">
        <Grid align="flex-start" direction="column">
          <p className="title">{this.props.title}</p>
          <p className="value">$ {this.props.value}</p>
        </Grid>
        <small className={`status ${this.props.status}`}>{this.props.status === "spend" ? "spend" : "earn"}</small>
      </Grid>
    );
  }
}

class Section extends React.Component {
  render() {
    const {title, link, children, align, ...props} = this.props;
    return (
      <Grid align={align || "flex-start"} direction="column" className="section" {...props}>
        <Grid align="center" direction="row" justify="space-between">
          <h3>{title}</h3>
          <small className="see-more">{link}</small>
        </Grid>
        {children}
      </Grid>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [{
        name: "Boosting",
        description: "instagram post",
        img: "https://image.flaticon.com/icons/svg/3056/3056301.svg",
        value: "245",
        createdAt: "02/01/2020"
      }, {
        name: "Banjo",
        description: "music promotion",
        img: "https://image.flaticon.com/icons/svg/3056/3056051.svg",
        value: "123",
        createdAt: "23/06/2020"
      }, {
        name: "Guitar",
        description: "sound promotion",
        img: "https://image.flaticon.com/icons/svg/3056/3056110.svg",
        value: "15",
        createdAt: "26/11/2020"
      }],
      users: [{
        name: "Jhon",
        avatar: "https://res.cloudinary.com/luneswallet/image/upload/v1593960473/react-examples/person3.jpg"
      }, {
        name: "Ana",
        avatar: "https://res.cloudinary.com/luneswallet/image/upload/v1593960473/react-examples/person1.jpg"
      }, {
        name: "Erika",
        avatar: "https://res.cloudinary.com/luneswallet/image/upload/v1593960473/react-examples/person2.jpg"
      }, {
        name: "Juan",
        avatar: "https://res.cloudinary.com/luneswallet/image/upload/v1593960473/react-examples/person4.jpg"
      }]
    };
  }

  componentDidMount() {
    this.ctx = document.getElementById("myChart").getContext("2d");
    this.myChart = new Chart(this.ctx, {
      type: "doughnut",
      data: {
        labels: ["Boosting", "Banjo", "Guitar"],
        datasets: [{
          label: "# of Votes",
          data: [245, 123, 15],
          backgroundColor: [
            "#62a3e8",
            "#e64085",
            "#40e6a1"
          ],
          borderWidth: 0
        }]
      },
      options: {
        gridLines: {
          lineWidth: 0,
          drawBorder: false,
          drawTicks: false
        }
      }
    });
  }

  render() {
    const {users, transactions} = this.state;
    return (
      <Container>
        <Header/>
        <Account/>
        <SectionItem title="Drone AVMoc Pro X" value={2412.8} status="spend"/>

        <div className="container-send-money">
          <Grid justify="flex-start" className="send-money">
            <Button color="transparent">
              <img src="https://res.cloudinary.com/luneswallet/image/upload/v1593952388/react-examples/add.svg"/>
            </Button>
            <p>Send Money</p>
          </Grid>
          <HorizontalScroll>
            {users.map((user, i) => (
              <div key={i} className="horizontal-card users">
                <div className="image" style={{"background-image": `url(${user.avatar})`}}/>
                <p>{user.name}</p>
              </div>
            ))}
          </HorizontalScroll>
        </div>

        <Section title="Recent transactions" link="See all" align="center" padding={4}>
          {transactions.map((transaction, i) => (
            <Grid key={i} className="card transactions" padding={4}>
              <Grid>
                <img src={transaction.img} alt={transaction.name}/>
              </Grid>
              <Grid direction="column" align="flex-start">
                <h3>{transaction.name}</h3>
                <small>{transaction.description}</small>
              </Grid>
              <Grid direction="column" align="flex-end">
                <small>{transaction.value}</small>
                <small className="createdAt">{transaction.createdAt}</small>
              </Grid>
            </Grid>
          ))}
        </Section>

        <Section title="Chart transactions" padding={4}>
          <canvas id="myChart" width="400" height="400"></canvas>
        </Section>

        <Footer/>
      </Container>
    );
  }
}

export default class BasePage extends React.Component {
  render() {
    return (
      <div className="center">
        <div className="marvel-device iphone-x">
          <div className="notch">
            <div className="camera"/>
            <div className="speaker"/>
          </div>
          <div className="top-bar"/>
          <div className="sleep"/>
          <div className="bottom-bar"/>
          <div className="volume"/>
          <div className="overflow">
            <div className="shadow shadow--tr"/>
            <div className="shadow shadow--tl"/>
            <div className="shadow shadow--br"/>
            <div className="shadow shadow--bl"/>
          </div>
          <div className="inner-shadow"/>
          <div className="screen">
            <Main/>
          </div>
        </div>
      </div>
    );
  }
}