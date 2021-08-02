$(document).ready(function(){
    
    // headeer 숨기거나 나타나게 하기
    // scroll 진행 > true / 아니면 false
    
    var didScroll;
    var lastScrollTop = 0;
    // 스크롤 방향을 나타내는 변수
    var delta = 5;
    // navbarHeight : header영역 높이값
    var navbarHeight = $('.header').outerHeight();
    // 본문 영역의 안쪽,위여백을 header높이만큼 설정
    $('.section').css('padding-top',navbarHeight);
    // window화면에 scroll설정
    $(window).scroll(function(event){
        didScroll = true;
    });

    // 0.25s동안 실행
    setInterval(function() {
        // 만약 스크롤이 진행되면(움직임이 감지되면) hasScrolled호출
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    // hasScrolled 선언
    function hasScrolled() {
        // 변수st body문서의 맨 위쪽 위치값 저장
        var st = $(this).scrollTop();
        
        // 화면 스크롤방향이 같은 방향이면 header는 움직임이 없다
        // Make sure they scroll more than delta   (스크롤값 - st갑) <= 델타값
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        //  화면 스크롤 방향이 달라지는지 감지하는 조건문
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header').removeClass('header-up').addClass('header-down');
            }
        }
        
        lastScrollTop = st;
    };

    $('.menu_btn').click(function(){
        $('.nav').animate({'right':0});
    });
    $('.close').click(function(){
        $('.nav').animate({'right':'-100vw'});
    });

    // nav .sub
    $('.nav nav>ul>li>a').click(function(e){
        // 만약 클릭한 주메뉴에 active가 설정되어 있지 않으면 클릭한 메뉴 활성
        // attr() : 객체 속성을 인식하는 매서드
        e.preventDefault();
        if($(this).attr('class') != 'active') {
            $('.nav nav>ul>li>a').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).next().stop().slideToggle();
        }else{
            $(this).removeClass('active');
            $(this).next().stop().slideUp();
        }
    });
    // $('.nav nav>ul>li').click(function(){
    //     $(this).find('.sub').stop().slideToggle();
    //     $(this).find('.sub').stop().sildeUp();
    // }); 이것만 작성해도 적용은됨

    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        loop: true,
    });

    // tab
    $('.tab_content>div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.con1').fadeIn();
        $('.con2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });
    $('.t2').click(function(){
        $('.con1').hide();
        $('.con2').fadeIn();
        $('.t2').addClass('active');
        $('.t1').removeClass('active');
    });
    
    // popup
    // $('.popup .pop_area a').imageLightbox();
    
		var
        // ACTIVITY INDICATOR

        activityIndicatorOn = function()
        {
            $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
        },
        activityIndicatorOff = function()
        {
            $( '#imagelightbox-loading' ).remove();
        },


        // OVERLAY

        overlayOn = function()
        {
            $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
        },
        overlayOff = function()
        {
            $( '#imagelightbox-overlay' ).remove();
        },


        // CLOSE BUTTON

        closeButtonOn = function( instance )
        {
            $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
        },
        closeButtonOff = function()
        {
            $( '#imagelightbox-close' ).remove();
        }

        // ARROWS

			arrowsOn = function( instance, selector )
			{
				var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

				$arrows.appendTo( 'body' );

				$arrows.on( 'click touchend', function( e )
				{
					e.preventDefault();

					var $this	= $( this ),
						$target	= $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
						index	= $target.index( selector );

					if( $this.hasClass( 'imagelightbox-arrow-left' ) )
					{
						index = index - 1;
						if( !$( selector ).eq( index ).length )
							index = $( selector ).length;
					}
					else
					{
						index = index + 1;
						if( !$( selector ).eq( index ).length )
							index = 0;
					}

					instance.switchImageLightbox( index );
					return false;
				});
			},
			arrowsOff = function()
			{
				$( '.imagelightbox-arrow' ).remove();
			};

            
        var selectorF = 'a[data-imagelightbox="f"]';
		var instanceF = $( selectorF ).imageLightbox(
			{
				onStart:		function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
				onEnd:			function() { overlayOff(); closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
				onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
			});

    var winHeight=$(document).height();
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0});
    });










});