import React, {useState, useEffect} from 'react'
import { portfolio } from './Data'
import { PortfolioContainer, PortfolioWrapper, PortfolioRow, PortfolioFilterRow, PortfolioFilterItem, PortfolioFilter, PortfolioGalleryContainer, PortfolioGallery, PortfolioCardContainer, PortfolioCard, PortfolioImageOverlay, PortfolioImage, PortfolioContent, PortfolioHeadline, PortfolioCopy } from './PortfolioElements'
import { PortfolioButton } from '../Button'
import '../../styles/portfolio.scss'


const Portfolio = ( {toggle} ) => {

    const [filter, setFilter] = useState('all')

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(portfolio)
    }, [])

    useEffect(() => {
        setProjects([])

        const filtered = portfolio.map(p => ({ ...p, filtered: p.category.includes(filter) }))

        setProjects(filtered)
    }, [filter])

    return (
        <>
            <PortfolioContainer id="portfolio">
                <PortfolioWrapper>
                    <PortfolioRow>
                        <PortfolioFilterRow>
                            <PortfolioFilterItem>
                                <PortfolioFilter  active={filter === 'all'} onClick={() => setFilter('all')}>All</PortfolioFilter>
                            </PortfolioFilterItem>
                            <PortfolioFilterItem>
                                <PortfolioFilter  active={filter === 'web'} onClick={() => setFilter('web')}>Web</PortfolioFilter>
                            </PortfolioFilterItem>
                            <PortfolioFilterItem>
                                <PortfolioFilter  active={filter === 'graphic'} onClick={() => setFilter('graphic')}>Graphic Design</PortfolioFilter>
                            </PortfolioFilterItem>
                            <PortfolioFilterItem>
                                <PortfolioFilter  active={filter === 'email'} onClick={() => setFilter('email')}>Email</PortfolioFilter>
                            </PortfolioFilterItem>
                            <PortfolioFilterItem>
                                <PortfolioFilter  active={filter === 'banner'} onClick={() => setFilter('banner')}>Banner</PortfolioFilter>
                            </PortfolioFilterItem>
                        </PortfolioFilterRow>
                        <PortfolioGalleryContainer>
                            <PortfolioGallery>

                                { projects.map(item => item.filtered === true ? (

                                    <PortfolioCardContainer key={item.id} className="portfolio__card__container">
                                        <PortfolioCard className="portfolio__card">
                                            <PortfolioImage src={item.src[0]} className="portfolio__image"></PortfolioImage>
                                            <PortfolioImageOverlay className="portfolio__image__overlay"></PortfolioImageOverlay>
                                            <PortfolioContent className="portfolio__content">
                                                <PortfolioHeadline className="portfolio__headline">{item.headline}</PortfolioHeadline>
                                                <PortfolioCopy className="portfolio__copy">{item.copy}</PortfolioCopy>
                                                <PortfolioButton className="portfolio__button" onClick={(e) => toggle(e, item)}>Learn More</PortfolioButton>
                                            </PortfolioContent>
                                        </PortfolioCard>
                                    </PortfolioCardContainer>

                                ) : '' )}

                            </PortfolioGallery>
                        </PortfolioGalleryContainer>
                    </PortfolioRow>
                </PortfolioWrapper>
            </PortfolioContainer>
        </>
    )
}

export default Portfolio
