namespace $.$mol {
	export class $my_option_rooms extends $.$my_option_rooms {
		
		rooms() {
			return Object.keys( this.rooms_data() ).map( id => this.Room( id ) )
		}

		room_avatar( id : string ) {
			return this.rooms_data()[ id ].avatar
		}
		
		room_name( id : string ) {
			return this.rooms_data()[ id ].name
		}

		room_arg( id : string ) {
			return { room : id }
		}
		
	}
}