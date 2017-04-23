namespace $ { export class $my_option_room extends $mol_page {

	/// minimal_width 1200
	minimal_width() {
		return 1200
	}

	/// id \
	id() {
		return ""
	}

	/// data * 
	/// 	name \
	/// 	greeting / 
	/// 	avatar \
	/// 	photos /
	data() {
		return ({
			"name" :  "" ,
			"greeting" :  [] as any[] ,
			"avatar" :  "" ,
			"photos" :  [] as any[] ,
		})
	}

	/// name \
	name() {
		return ""
	}

	/// title <= name
	title() {
		return this.name()
	}

	/// frequency 1
	frequency() {
		return 1
	}

	/// photos /
	photos() {
		return [] as any[]
	}

	/// message_fail @ \С мужиками такое случается.. Не частно, один разок из пяти. Давай попробуем снова?
	message_fail() {
		return $mol_locale.text( this.locale_contexts() , "message_fail" )
	}

	/// message_wait @ \Интрига..
	message_wait() {
		return $mol_locale.text( this.locale_contexts() , "message_wait" )
	}

	/// level?val 0
	@ $mol_mem()
	level( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 0
	}

	/// Close_icon $mol_icon_cross
	@ $mol_mem()
	Close_icon() {
		return new $mol_icon_cross()
	}

	/// Close $mol_link 
	/// 	arg * room null 
	/// 	sub / <= Close_icon
	@ $mol_mem()
	Close() {
		return new $mol_link().setup( obj => { 
			obj.arg = () => ({
			"room" :  <any> null ,
		})
			obj.sub = () => [].concat( this.Close_icon() )
		} )
	}

	/// tools / <= Close
	tools() {
		return [].concat( this.Close() )
	}

	/// ballance_base 1000
	ballance_base() {
		return 1000
	}

	/// ballance?val <= ballance_base
	@ $mol_mem()
	ballance( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : this.ballance_base()
	}

	/// Ballance $mol_view sub / <= ballance?val
	@ $mol_mem()
	Ballance() {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.ballance() )
		} )
	}

	/// good true
	good() {
		return true
	}

	/// difference \+0
	difference() {
		return "+0"
	}

	/// Difference $mol_view 
	/// 	attr * my_option_room_difference_good <= good 
	/// 	sub / <= difference
	@ $mol_mem()
	Difference() {
		return new $mol_view().setup( obj => { 
			obj.attr = () => ({
			"my_option_room_difference_good" :  this.good() ,
		})
			obj.sub = () => [].concat( this.difference() )
		} )
	}

	/// Score!id $mol_view sub / 
	/// 	<= Ballance 
	/// 	\ (
	/// 	<= Difference 
	/// 	\)
	@ $mol_mem_key()
	Score( id : any ) {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.Ballance() , " (" , this.Difference() , ")" )
		} )
	}

	/// Graph_line $mol_plot_line
	@ $mol_mem()
	Graph_line() {
		return new $mol_plot_line()
	}

	/// Graph_dot $mol_plot_dot
	@ $mol_mem()
	Graph_dot() {
		return new $mol_plot_dot()
	}

	/// series /
	series() {
		return [] as any[]
	}

	/// Graph $mol_plot_group 
	/// 	graphs / 
	/// 		<= Graph_line 
	/// 		<= Graph_dot 
	/// 	series <= series
	@ $mol_mem()
	Graph() {
		return new $mol_plot_group().setup( obj => { 
			obj.graphs = () => [].concat( this.Graph_line() , this.Graph_dot() )
			obj.series = () => this.series()
		} )
	}

	/// History $mol_plot_pane 
	/// 	hue_base 170 
	/// 	- Legend null 
	/// 	graphs / 
	/// 		- <= Ruler_vert 
	/// 		<= Graph
	@ $mol_mem()
	History() {
		return new $mol_plot_pane().setup( obj => { 
			obj.hue_base = () => 170
			obj.graphs = () => [].concat( this.Graph() )
		} )
	}

	/// buy_title @ \Рост
	buy_title() {
		return $mol_locale.text( this.locale_contexts() , "buy_title" )
	}

	/// event_up?val null
	@ $mol_mem()
	event_up( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Bid_inc $mol_button 
	/// 	title <= buy_title 
	/// 	event_click?val <=> event_up?val
	@ $mol_mem()
	Bid_inc() {
		return new $mol_button().setup( obj => { 
			obj.title = () => this.buy_title()
			obj.event_click = ( val? : any ) => this.event_up( val )
		} )
	}

	/// sell_title @ \Снижение
	sell_title() {
		return $mol_locale.text( this.locale_contexts() , "sell_title" )
	}

	/// event_down?val null
	@ $mol_mem()
	event_down( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : <any> null
	}

	/// Bid_dec $mol_button 
	/// 	title <= sell_title 
	/// 	event_click?val <=> event_down?val
	@ $mol_mem()
	Bid_dec() {
		return new $mol_button().setup( obj => { 
			obj.title = () => this.sell_title()
			obj.event_click = ( val? : any ) => this.event_down( val )
		} )
	}

	/// Actions $mol_row sub / 
	/// 	<= Bid_inc 
	/// 	<= Bid_dec
	@ $mol_mem()
	Actions() {
		return new $mol_row().setup( obj => { 
			obj.sub = () => [].concat( this.Bid_inc() , this.Bid_dec() )
		} )
	}

	/// greeting \
	greeting() {
		return ""
	}

	/// message?val <= greeting
	@ $mol_mem()
	message( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : this.greeting()
	}

	/// Message $mol_text text <= message?val
	@ $mol_mem()
	Message() {
		return new $mol_text().setup( obj => { 
			obj.text = () => this.message()
		} )
	}

	/// Game $mol_view sub / 
	/// 	<= History 
	/// 	<= Actions 
	/// 	<= Message
	@ $mol_mem()
	Game() {
		return new $mol_view().setup( obj => { 
			obj.sub = () => [].concat( this.History() , this.Actions() , this.Message() )
		} )
	}

	/// photo_style \
	photo_style() {
		return " "
	}

	/// Photo $mol_view style * backgroundImage <= photo_style
	@ $mol_mem()
	Photo() {
		return new $mol_view().setup( obj => { 
			obj.style = () => ({
			"backgroundImage" :  this.photo_style() ,
		})
		} )
	}

	/// body / 
	/// 	<= Game 
	/// 	<= Photo
	body() {
		return [].concat( this.Game() , this.Photo() )
	}

} }

