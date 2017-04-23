namespace $.$mol {
	export class $my_option_room extends $.$my_option_room {
		
		photo() {
			return this.data().photos[ this.level() ]
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

		bid( what : boolean ) {
			const start = this.series()[ this.series().length - 1 ]
			this.message( this.message_wait() )
			setTimeout( ()=> {
				const end = this.series()[ this.series().length - 1 ]
				if( ( end > start ) === what ) {
					this.ballance( Math.floor( this.ballance() * 1.1 ) )
					this.level( Math.min( this.level() + 1 , this.data().photos.length - 1 ) )
					this.message( undefined , $mol_atom_force )
				} else {
					this.ballance( Math.floor( this.ballance() * 0.9 ) )
					this.level( 0 )
					this.message( this.message_fail() )
				}
			} , 1000 )
		}

		@ $mol_mem()
		series() {
			const seed = $mol_state_time.now( 1000 / this.frequency() ) * this.frequency() / 1000
			const res = [] as number[]
			for( let i = 0 ; i < 30 ; ++i ) {
				res.push( Math.sin( seed + i ) * 10 % 3 )
			}
			return res
		}

		tools() {
			return [
				this.Score( this.ballance() ) ,
				this.Close() ,
			]
		}

	}
}