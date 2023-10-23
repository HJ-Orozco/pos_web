import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertService } from "@shared/services/alert.service";
import { Observable } from "rxjs";
import { CategoryApi } from "../responses/category/category.response";
import { environment as env } from "src/environments/environment";
import { endpoint } from "@shared/apis/endpoint";
import { ListCategoryRequest } from "../requests/category/list-category.request";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private _http: HttpClient, private _alert: AlertService) {}

  GetAll(size, sort, order, page, getInputs): Observable<CategoryApi> {
    const requetUrl = `${env.api}${endpoint.LIST_CATEGORIES}`;
    const params: ListCategoryRequest = new ListCategoryRequest(
      page + 1,
      order,
      sort,
      size,
      getInputs.numFilter,
      getInputs.textFilter,
      getInputs.stateFilter,
      getInputs.statDate,
      getInputs.endDate
    );

    return this._http.post<CategoryApi>(requetUrl, params).pipe(
      map((data: CategoryApi) => {
        data.data.items.forEach(function (e: any) {
          switch (e.state) {
            case 0:
              e.badgeColor = "text-gay bg-gray-light";
              break;
            case 1:
              e.badgeColor = "text-green bg-green-light";
              break;
            default:
              e.badgeColor = "text-gay bg-gray-light";
              break;
          }
        });
        return data;
      })
    );
  }
}
