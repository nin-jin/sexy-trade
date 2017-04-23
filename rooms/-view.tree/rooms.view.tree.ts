namespace $ { export class $my_option_rooms extends $mol_page {

	/// minimal_width 400
	minimal_width() {
		return 400
	}

	/// title @ \Sexy trade
	title() {
		return $mol_locale.text( this.locale_contexts() , "title" )
	}

	/// rooms /
	rooms() {
		return [] as any[]
	}

	/// Rooms $mol_list rows <= rooms
	@ $mol_mem()
	Rooms() {
		return new $mol_list().setup( obj => { 
			obj.rows = () => this.rooms()
		} )
	}

	/// body / <= Rooms
	body() {
		return [].concat( this.Rooms() )
	}

	/// rooms_data *
	rooms_data() {
		return ({
		})
	}

	/// room_arg!id *
	room_arg( id : any ) {
		return ({
		})
	}

	/// room_avatar!id \
	room_avatar( id : any ) {
		return ""
	}

	/// Room_avatar!id $mol_image uri <= room_avatar!id
	@ $mol_mem_key()
	Room_avatar( id : any ) {
		return new $mol_image().setup( obj => { 
			obj.uri = () => this.room_avatar(id)
		} )
	}

	/// room_name!id \
	room_name( id : any ) {
		return ""
	}

	/// Room_name!id $mol_view sub / <= room_name!id
	@ $mol_mem_key()
	Room_name( id : any ) {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.room_name(id) )
		} )
	}

	/// Room_content!id $mol_row sub / 
	/// 	<= Room_avatar!id 
	/// 	<= Room_name!id
	@ $mol_mem_key()
	Room_content( id : any ) {
		return new $mol_row().setup( obj => { 
			obj.sub = () => [].concat( this.Room_avatar(id) , this.Room_name(id) )
		} )
	}

	/// Room!id $mol_link 
	/// 	arg <= room_arg!id 
	/// 	sub / <= Room_content!id
	@ $mol_mem_key()
	Room( id : any ) {
		return new $mol_link().setup( obj => { 
			obj.arg = () => this.room_arg(id)
			obj.sub = () => [].concat( this.Room_content(id) )
		} )
	}

} }

