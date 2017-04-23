namespace $.$mol {
	export class $my_option extends $.$my_option {
		
		selected_id() {
			return $mol_state_arg.value( 'room' )
		}

		selected_data() {
			return this.rooms_data()[ this.selected_id() ]
		}

		pages() {
			return [
				this.Placeholder() ,
				this.Rooms() ,
				this.selected_id() ? this.Room() : null ,
			]
		}
		
	}
}