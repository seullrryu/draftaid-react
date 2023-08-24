import React, { PureComponent } from "react";
// import { rankings } from "./utils/cleanUp";

class PlayerTable extends PureComponent {
	rows() {
		let players = this.props.players.slice();

		if (this.props.size) {
			players = players.slice(0, this.props.size);
		}

		return players.map((player, i) => {
			return (
				<tr
					key={i}
					className={this.trClassName(player.TIERS, player.age, this.props.disableColor)}
					onClick={() => this.onClick(player)}
				>
					{this.columns(player)}
				</tr>
			);
		});
	}

	onClick(player) {
		if (this.props.onClick) {
			return this.props.onClick(player);
		}
	}

	trClassName(tier, age, disable) {
		if (disable) {
			return "pointer";
		}
		if (tier % 4 === 0) {
			return "active pointer";
		}
		if (tier % 4 === 1) {
			return "success pointer";
		}
		if (tier % 4 === 2) {
			return "warning pointer";
		}
		if (tier % 4 === 3) {
			return "info pointer";
		}
		return "danger pointer";
	}

	columns(player) {
		return this.props.fields.map((f, i) => {
			if (f === "tier") {
				return (
					<td style={{ padding: "0.5rem 0.75rem" }} key={i}>
						Tier {player[f]}
					</td>
				);
			} else if (f === "bye") {
				return (
					<td style={{ padding: "0.5rem 0.75rem" }} key={i}>
						BYE {player[f]}
					</td>
				);
			} else if (f === "age" && player[f] >= 28.0) {
				return (
					<td style={{ padding: "0.5rem 0.75rem" }} key={i}>
						{player[f]} ❌
					</td>
				);
			} else {
				return (
					<td style={{ padding: "0.5rem 0.75rem" }} key={i}>
						{player[f]}
					</td>
				);
			}
		});
	}

	render() {
		return (
			<table
				style={{ borderCollapse: "collapse", overflowY: "scroll" }}
				className="table table-condensed table-hover table-striped"
			>
				<tbody>{this.rows()}</tbody>
			</table>
		);
	}
}

PlayerTable.propTypes = {
	players: React.PropTypes.array,
	fields: React.PropTypes.array.isRequired,
	onClick: React.PropTypes.func,
	size: React.PropTypes.number,
	disableColor: React.PropTypes.bool,
};

export default PlayerTable;
