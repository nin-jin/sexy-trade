namespace $.$mol {
	export class $my_option_room extends $.$my_option_room {

		photo_count() {
			return this.data().photo_count
		}

		photo() {
			return $mol_file.relative( `/my/option/image/${ this.id() }/${ this.level() }.jpg` ).path()
		}

		photo_style() {
			return `url( "${ this.photo() }" )`
		}

		name() {
			return this.data().name
		}

		greeting() {
			return this.data().greeting[ this.level() ]
		}

		event_down( event? : Event ) {
			this.bid( false )
		}

		event_up( event? : Event ) {
			this.bid( true )
		}

		difference() {
			const val = Math.floor( 100 * this.ballance() / this.ballance_base() - 100 )
			return ( val < 0 ? '' : '+' ) + val.toString()
		}

		good() {
			return this.ballance() >= this.ballance_base()
		}

		end() {
			return this.series()[ this.series().length - 1 ]
		}

		bid( what : boolean ) {
			const start = this.start( this.series()[ this.series().length - 1 ] )
			
			this.bid_enabled( false )
			this.message( this.message_wait() )
			
			setTimeout( ()=> {
				this.bid_enabled( true )
				this.start( 0 )
				
				$mol_atom_task( 'bid' , ()=> {
					if( ( this.end() > start ) === what ) {
					
						this.ballance( Math.floor( this.ballance() * 1.1 ) )
						this.level( Math.min( this.level() + 1 , this.photo_count() - 1 ) )
						this.message( undefined , $mol_atom_force )
					
					} else {
					
						this.ballance( Math.floor( this.ballance() * 0.9 ) )
						this.level( 0 )
						this.message( this.message_fail() )
					
					}
				} )

			} , 5000 )
		}

		demo() {
			return $mol_state_arg.value( 'demo' ) != null
		}

		graphs() {
			const next = [ this.Graph() ] as $mol_plot_graph[]
			if( this.start() ) next.push( this.Start() )
			return next
		}

		series_start() {
			const start = this.start()
			return this.series().map( _ => start )
		}

		@ $mol_mem()
		series() {
			const seed = Math.floor( $mol_state_time.now( 1000 / this.frequency() ) * this.frequency() / 1000 )
			if( this.demo() ) {
				const res = [] as number[]
				for( let i = 0 ; i < 30 ; ++i ) {
					res.push( Math.sin( seed + i ) * 10 % 3 )
				}
				return res
			} else {
				return $mol_http_resource_json.item<number[]>( `//api.sexy-trade.hyoo.ru/${ this.id() }?${ seed }` ).json()
			}
		}

		tools() {
			return [
				this.Score( this.ballance() ) ,
				this.Close() ,
			]
		}

	}
}