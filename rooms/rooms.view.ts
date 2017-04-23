namespace $.$mol {
	export class $my_option_rooms extends $.$my_option_rooms {
		
		rooms() {
			return Object.keys( this.rooms_data() ).map( id => this.Room( id ) )
		}

		room_avatar( id : string ) {
			return $mol_file.relative( `/my/option/image/${ id }/avatar.jpg` ).path()
		}
		
		room_name( id : string ) {
			return this.rooms_data()[ id ].name
		}

		room_arg( id : string ) {
			return { room : id }
		}
		
	}
}