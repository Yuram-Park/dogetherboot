package com.dogether.service;

import java.util.List;

import org.mybatis.spring.MyBatisSystemException;
import org.springframework.stereotype.Service;

import com.dogether.domain.FavoritePlace;
import com.dogether.domain.Place;
import com.dogether.dto.PlaceCount;
import com.dogether.repository.PlaceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaceService {

    private final PlaceRepository placeRepository;

    public List<Place> list(String place_category) {
        List<Place> places = placeRepository.getDataAll(place_category);
        return places;
    }

    public List<Place> list(Place place) {
        List<Place> places = placeRepository.getDataChecked(place);

        return places;
    }

    public Place detail(int place_id) {
        return placeRepository.selectOne(place_id);
    }

    public List<Place> favoriteList(String user_id) {
        return placeRepository.selectFavorite(user_id);
    }

    public boolean setFavoritePlace(FavoritePlace favoritePlace) {
        int result = placeRepository.insertFavorite(favoritePlace);
        return true;
    }

    public List<PlaceCount> placeCount() {
        List<PlaceCount> pc = placeRepository.getCountAll();
        for (PlaceCount item : pc) {
            switch (item.getPlace_category()) {
                case "cafe":
                    item.setKorean_category("카페");
                    break;
                case "dogcafe":
                    item.setKorean_category("애견카페");
                    break;
                case "dogshop":
                    item.setKorean_category("애견용품점");
                    break;
                case "hospital":
                    item.setKorean_category("병원");
                    break;
                case "hotel":
                    item.setKorean_category("호텔");
                    break;
                case "playground":
                    item.setKorean_category("애견운동장");
                    break;
                case "restaurant":
                    item.setKorean_category("식당");
                    break;
                case "school":
                    item.setKorean_category("애견유치원");
                    break;
                case "training":
                    item.setKorean_category("훈련소");
                    break;
            }
        }
        return pc;
    }

}
